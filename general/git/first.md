**Question:**
What should you do if you accidentally run `git add .` and want to undo it? Also, how can you deal with removing or modifying commits from Git history?

**Answer:**

If you accidentally run `git add .`, all modified files in the current directory are added to the **staging area**. If you want to undo this and remove the files from staging (without losing your changes), you can use:

```
git restore --staged name.txt
```

This command removes a **specific file** from the staging area but keeps the changes in your working directory.

If you want to remove **all staged files at once**, you can run:

```
git restore --staged .
```

This unstages every file that was added using `git add .`

To see the history of commits in a repository, you can use:

```
git log
```

This command displays the list of commits along with their **commit hash IDs**, author, date, and commit messages.

Now suppose you want to remove or go back to a previous commit from the commit history. In Git, commits are connected in a chain, and each commit has a unique **hash ID**. Because of this linked structure, you cannot simply delete a commit in the middle without affecting the commit flow.

To move the repository back to a previous commit, Git provides the **`git reset`** command. There are three main types of reset:

1. **Soft Reset**

```
git reset --soft <commit-hash>
```

This moves the HEAD pointer to the specified commit but **keeps all changes staged**.

2. **Mixed Reset (Default)**

```
git reset --mixed <commit-hash>
```

This moves HEAD to the specified commit and **unstages the changes**, but the changes remain in the working directory.

3. **Hard Reset**

```
git reset --hard <commit-hash>
```

This moves HEAD to the specified commit and **removes all changes from both the staging area and working directory**, permanently discarding them.

These commands allow developers to manage mistakes in staging or commits and safely control the project’s commit history.
 


**Question:**
Suppose I am working on a file and have written some new feature code, but now I want a clean codebase to try another approach without committing the current changes. I use `git stash` to temporarily save my changes. Later, after trying the new approach, I realize that the stashed changes are not needed anymore. What should I do in this situation?

**Answer:**
In this scenario, `git stash` is used to temporarily store uncommitted changes and restore the working directory to a clean state. When you run `git stash`, Git saves your current modifications in a stash stack and resets your working directory to the last committed state, allowing you to experiment with a clean codebase.

If later you find that the stashed changes are required, you can restore them using `git stash pop`, which reapplies the changes and removes the stash entry from the stash list. If you want to apply the stash but keep it in the list, you can use `git stash apply`.

However, if you realize that the stashed changes are no longer needed, you can simply delete that stash entry. First, you can view all stashes using `git stash list`. Then you can remove a specific stash using `git stash drop stash@{0}` (where `stash@{0}` usually represents the most recent stash). If you want to remove all stored stashes, you can use `git stash clear`.

This workflow allows developers to temporarily save work, experiment with a clean codebase, and later decide whether to restore or discard the saved changes.




**Question:**
If you clone a project and want to make changes while keeping it updated with the original repository, how can you do it?

**Answer:**
When you clone a repository, it is added as the **`origin` remote**. If the project is a fork, `origin` points to your fork. To keep your project updated with the **original repository**, you add it as an **upstream remote**.

```
git remote add upstream <original-repo-url>
```

Here:

* **origin** → your fork (where you push your changes)
* **upstream** → original repository (where updates come from)

You can fetch updates from the original repository using:

```
git fetch upstream
```

This setup allows you to work on your fork while staying updated with the original project.


**Question:**
Suppose a branch has 3 commits and I want to combine them into a single commit using interactive rebase. How does this work with real commit hashes?

**Answer:**

Assume the commit history looks like this:

```id="d7m4w1"
9f8e7d6  Fix login validation
6b5a4c3  Add login API
2a1b0c9  Create login UI
```

Here:

* `2a1b0c9` → oldest commit
* `6b5a4c3` → second commit
* `9f8e7d6` → latest commit

If you want to combine all three commits into **one clean commit**, run:

```id="7z2xqf"
git rebase -i HEAD~3
```

Git will open an editor like this:

```id="9t2lra"
pick 2a1b0c9 Create login UI
pick 6b5a4c3 Add login API
pick 9f8e7d6 Fix login validation
```

Now change it to:

```id="2xgq7m"
pick 2a1b0c9 Create login UI
squash 6b5a4c3 Add login API
squash 9f8e7d6 Fix login validation
```

Explanation:

* `pick` keeps the first commit as the base.
* `squash` merges the next commits into the previous one.

After saving, Git will combine the commits and allow you to edit the final commit message. The final result will be **one single commit containing all the changes**.

