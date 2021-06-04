# FSHOnline-Examples

This repository contains a set of FHIR Shorthand examples that are displayed on [FSH Online](https://fshschool.org/FSHOnline/). 
The goal of these examples is to demonstrate how to do things in FSH, and FSH authors are encouraged to submit their own examples to benefit the FSH community.

## Example Submissions
Examples should be submitted by way of pull requests on this repository. Submissions will then be reviewed and merged into the `main` branch. To create a pull request, follow the following steps:

1.  If you don’t have Git installed on your machine, instructions to do so can be found at [this link](https://git-scm.com/downloads).
2. Clone the FSHOnline-Examples repository onto your machine by navigating to the directory you would like to save the repository to within the terminal, then entering the following command: `git clone https://github.com/FSHSchool/FSHOnline-Examples.git` ` 
3. Open the `FSHOnline-Examples` directory that has been created on your machine and create a new branch to upload changes from. This can be done with the following command: `git checkout -b <your-new-branch-name>`
4. Create any additions within the `Examples` subdirectory of the repository. FSH files can be directly added anywhere within the `Examples` subdirectory, and new example categories can be created by simply creating creating a subdirectory within the `Examples` folder. 
5. After completing all changes, stage your work for a commit with the following command: `git add —all`
6. Create a commit with the following command: `git commit -m “<description of your addition”`
7. Push your commit to Github with the following command: `git push —set-upstream origin <your-branch-name>`
8. Navigate to the FSHOnline-Examples repository on Github and then click on “Pull requests”.
9. You should be prompted to create a pull request from the branch you just updated. If not, click on “New pull request”, select `main` as the base branch and your feature branch as the compare branch, and then click “Create pull request”.
10. Edit the title and description of the pull request, and then click “Create pull request”.

## Metadata Tags
Each example file should have both a name and description tag to specify how the example should be displayed in FSHOnline. The name tag defines what is listed in the examples menu, and the description defines what is presented to the user when they hover their cursor over your example. Tags are to be added by way of two single line comments at the top of the file, with the `@Name:` tag included in one comment, and the `@Description:` tag included in another. For example:
```
// @Name: Your example’s display name goes here
// @Description: A description of your example goes here  
```
Each metadata tag can only be a single line.
