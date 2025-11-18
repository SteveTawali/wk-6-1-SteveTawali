# GitHub Project Exports

**Team Name:** Cyber Pen  
**Date:** November 17, 2025  
**Version:** 1.0

This directory contains exports and screenshots from the GitHub Project board used for managing the Bookstore QA Project.

## Files Included

### Screenshots

1. **[board-screenshot.png](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/board-screenshot.png)** - Main project board view showing all tasks and their status
2. **[board-screenshot2.png](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/board-screenshot2.png)** - Additional board view (alternative view or different state)
3. **[filter-Defects-screenshot.png](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/filter-Defects-screenshot.png)** - Filtered view showing only defect-related items
4. **[filter-Tasks-screenshot.png](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/filter-Tasks-screenshot.png)** - Filtered view showing only task items
5. **[filter-Team-items-screenshot.png](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/filter-Team-items-screenshot.png)** - Filtered view showing team-specific items
6. **[filter-Roadmap-screenshot.png](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/filter-Roadmap-screenshot.png)** - Roadmap view of the project

### Data Exports

1. **[Bookstore QA Project - Defects.tsv](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/Bookstore%20QA%20Project%20-%20Defects.tsv)** - Tab-separated export of all defects from the project board
   - Contains: Title, URL, Assignees, Status, Labels
   - Includes all 5 bug issues (BUG--000 through BUG--004)

2. **[Bookstore QA Project - Tasks.tsv](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/Bookstore%20QA%20Project%20-%20Tasks.tsv)** - Tab-separated export of all tasks from the project board
   - Contains: Title, URL, Assignees, Status, Linked pull requests, Sub-issues progress
   - Includes all project tasks from setup to final submission

3. **[issues-bugs-export.csv](https://github.com/SteveTawali/wk-6-1-SteveTawali/blob/main/tests/project-exports/issues-bugs-export.csv)** - CSV export of GitHub issues with "bug" label
   - Contains: Number, Title, State, Labels, Assignees, Created
   - Exported via GitHub CLI 

## Export Methods

- **TSV files**: Exported manually from GitHub Projects web interface (Copy as TSV)
- **CSV file**: Exported via GitHub CLI using `gh issue list --label "bug"`
- **Screenshots**: Captured manually from GitHub Projects web interface


