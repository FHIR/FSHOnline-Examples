# FSHOnline-Examples

This repository contains a set of FHIR Shorthand examples that are displayed on [FSH Online](https://fshschool.org/FSHOnline/). 
The goal of these examples is to demonstrate various aspects of FHIR Shorthand, ranging from basic examples to complex concepts. FSH authors are encouraged to submit their own examples to be used by the FSH community. Each example should ideally demonstrate a feature of FSH that isn't covered by other examples.

## Example Submissions
Examples should be submitted by way of pull requests on this repository. Submissions will then be reviewed and merged into the `main` branch. To create a pull request, follow the following steps:

1. If you don’t have Git installed on your machine, instructions to do so can be found at [this link](https://git-scm.com/downloads).
2. Fork the FSHOnline-Examples repository, then clone your forked repository onto your machine.
3. Open the `FSHOnline-Examples` directory that has been created on your machine and create a new branch to upload changes from.
4. Create any additions within the `Examples` subdirectory of the repository. FSH files can be directly added anywhere within the `Examples` subdirectory, and new example categories can be created by simply creating a subdirectory within the `Examples` folder. 
5. After completing all changes, stage and commit your work.
6. Push your commit to Github with the following command: `git push —set-upstream origin <your-branch-name>`
7. Navigate to the FSHOnline-Examples repository on Github and then click on “Pull requests”.
8. Click on “New pull request”, then "compare across forks". Select `main` as the base branch, `FSHSchool/FSHOnline-Examples` as the base repository, your forked repository as the head repository, and your feature branch as the compare branch. Then, click “Create pull request”.
9. Edit the title and description of the pull request, and then click “Create pull request”.

## Metadata Tags
Each example file should have both a name and description tag to specify how the example should be displayed in FSHOnline. The name tag defines what is listed in the examples menu, and the description defines what is presented to the user when they hover their cursor over your example. Tags are to be added by way of two single line comments at the top of the file, with the `@Name:` tag included in one comment, and the `@Description:` tag included in another. For example:
```
// @Name: Display Name
// @Description: A description of your example goes here  
```
Each metadata tag can only be a single line.
