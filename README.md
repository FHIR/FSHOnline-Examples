# FSHOnline-Examples

This repository contains a set of FHIR Shorthand examples that are displayed on [FSH Online](https://fshonline.fshschool.org/). 
The goal of these examples is to demonstrate various aspects of FHIR Shorthand, ranging from basic examples to complex concepts. FSH authors are encouraged to submit their own examples to be used by the FSH community. Each example should ideally demonstrate a feature of FSH that isn't covered by other examples.

## FHIR Foundation Project Statement

- Maintainers: This project is maintained by the HL7 community.
- Issues / Discussion: For FHIR Shorthand examples issues, such as bug reports, comments, suggestions, questions, and feature requests, visit [FHIR Shorthand examples GitHub Issues](https://github.com/FHIR/FSHOnline-Examples/issues). For discussion of FHIR Shorthand and its associated projects, visit the FHIR Community Chat @ https://chat.fhir.org. The [#shorthand stream](https://chat.fhir.org/#narrow/stream/215610-shorthand) is used for all FHIR Shorthand questions and discussion.
- License: All contributions to this project will be released under the Apache 2.0 License, and a copy of this license can be found in [LICENSE](LICENSE).
- Contribution Policy: The FHIR Shorthand examples Contribution Policy can be found in [CONTRIBUTING.md](CONTRIBUTING.md).
- Security Information: The FHIR Shorthand examples Security Information can be found in [SECURITY.md](SECURITY.md).
- Compliance Information: N/A.

## Example Submissions
Examples should be submitted by way of pull requests on this repository. Submissions will then be reviewed and merged into the `main` branch. To create a pull request, follow the following steps:

1. If you don’t have Git installed on your machine, instructions to do so can be found at [this link](https://git-scm.com/downloads).
2. Fork the FSHOnline-Examples repository, then clone your forked repository onto your machine.
3. Open the `FSHOnline-Examples` directory that has been created on your machine and create a new branch to upload changes from.
4. Create any additions within the `Examples` subdirectory of the repository. FSH files can be directly added anywhere within the `Examples` subdirectory, and new example categories can be created by simply creating a subdirectory within the `Examples` folder. 
5. After completing all changes, stage and commit your work.
6. Push your commit to Github with the following command: `git push —set-upstream origin <your-branch-name>`
7. Navigate to the FSHOnline-Examples repository on Github and then click on “Pull requests”.
8. Click on “New pull request”, then "compare across forks". Select `main` as the base branch, `FHIR/FSHOnline-Examples` as the base repository, your forked repository as the head repository, and your feature branch as the compare branch. Then, click “Create pull request”.
9. Edit the title and description of the pull request, and then click “Create pull request”.

## Metadata Tags
Each example file should have both a name and description tag to specify how the example should be displayed in FSHOnline. The name tag defines what is listed in the examples menu, and the description defines what is presented to the user when they hover their cursor over your example. Tags are to be added by way of two single line comments at the top of the file, with the `@Name:` tag included in one comment, and the `@Description:` tag included in another. For example:
```
// @Name: Display Name
// @Description: A description of your example goes here  
```
Each metadata tag can only be a single line.

# License

Copyright 2020-2024 Health Level Seven International

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.