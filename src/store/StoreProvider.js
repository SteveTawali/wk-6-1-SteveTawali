import React, { createContext, useCallback, useMemo, useState, useEffect } from 'react';
import { safeGetItem, safeSetItem } from '../utils/storage';

export const StoreContext = createContext(null);

const STORAGE_KEYS = {
  cart: 'app.cart',
  orders: 'app.orders',
  coupons: 'app.coupons',
  notifications: 'app.notifications',
  user: 'app.user',
};

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => safeGetItem(STORAGE_KEYS.cart, []));
  const [orders, setOrders] = useState(() => safeGetItem(STORAGE_KEYS.orders, []));
  const [coupons, setCoupons] = useState(() => safeGetItem(STORAGE_KEYS.coupons, []));
  const [notifications, setNotifications] = useState(() => safeGetItem(STORAGE_KEYS.notifications, []));
  const [user, setUser] = useState(() => safeGetItem(STORAGE_KEYS.user, { role: 'admin' }));
  const [storageErrors, setStorageErrors] = useState([]);

  // Persist changes with graceful failure collection
  useEffect(() => {
    if (!safeSetItem(STORAGE_KEYS.cart, cart)) setStorageErrors((e) => [...e, 'cart']);
  }, [cart]);
  useEffect(() => {
    if (!safeSetItem(STORAGE_KEYS.orders, orders)) setStorageErrors((e) => [...e, 'orders']);
  }, [orders]);
  useEffect(() => {
    if (!safeSetItem(STORAGE_KEYS.coupons, coupons)) setStorageErrors((e) => [...e, 'coupons']);
  }, [coupons]);
  useEffect(() => {
    if (!safeSetItem(STORAGE_KEYS.notifications, notifications)) setStorageErrors((e) => [...e, 'notifications']);
  }, [notifications]);
  useEffect(() => {
    if (!safeSetItem(STORAGE_KEYS.user, user)) setStorageErrors((e) => [...e, 'user']);
  }, [user]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = useCallback((book, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === book.id);
      if (existing) {
        return prev.map((i) => (i.id === book.id ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [...prev, { id: book.id, book, quantity }];
    });
  }, []);

  const updateCartQuantity = useCallback((id, quantity) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const value = useMemo(
    () => ({
      cart,
      cartCount,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      clearCart,
      orders,
      setOrders,
      coupons,
      setCoupons,
      notifications,
      setNotifications,
      user,
      setUser,
      storageErrors,
    }),
    [cart, cartCount, addToCart, updateCartQuantity, removeFromCart, clearCart, orders, coupons, notifications, user, storageErrors]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};


