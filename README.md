Read below to see how you can join an existing project or create your own.
## A Guide to Get Started

1. On the [GitHub page for this repository](https://github.com/yoayushraj99/iic.git), click on the Button "Fork".

   ![fork image](https://help.github.com/assets/images/help/repository/fork_button.jpg)

2. Clone _your forked repository_ to your computer:

   ![code ui](https://docs.github.com/assets/images/help/repository/code-button.png)

    For example, run this command inside your terminal:

    ```bash
    git clone https://github.com/<your-github-username>/iic.git
    ```

    **Replace \<your-github-username\>!**

    Learn more about [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [cloning a repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


3. Before you make any changes, [keep your fork in sync](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/) to avoid merge conflicts:

    ```bash
    git remote add upstream https://github.com/yoayushraj99/iic.git
    git pull upstream main
    ```

    If you run into a **merge conflict**, you have to resolve the conflict. There are a lot of guides online, or you can try this one by [opensource.com](https://opensource.com/article/20/4/git-merge-conflict).

4. On your computer, open your text editor, and add your name to the `CONTRIBUTORS.md` file.

5. Add the changes with `git add`, `git commit` ([write a good commit message](https://chris.beams.io/posts/git-commit/), if possible):

    ```bash
    git add CONTRIBUTORS.md
    git commit -m "Add <your-github-username>"
    ```

    **Replace \<your-github-username\>!**

6. Push your changes _to your repository_:

    ```bash
    git push origin main
    ```

7. Go to the GitHub page of _your fork_, and make a pull request:

    ![pull request image](https://help.github.com/assets/images/help/pull_requests/choose-base-and-compare-branches.png)

    Read more about pull requests on the [GitHub help pages](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

8. Wait until one of the maintainers merges your pull request. If there are any conflicts, you will get a notification.