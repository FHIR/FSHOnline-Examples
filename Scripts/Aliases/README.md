# HL7 Alias Generation

This folder contains `make-aliaes.ipynb`, which generates the `HL7-*.fsh` files in the parent folder.

## Running

1. Install Python 3
2. Install `[pipenv](https://pipenv.pypa.io/en/latest/)`
3. Run `pipenv install` inside this folder to install dependencies
4. Run `pipenv run jupyter notebook` inside this folder

### VS Code Support

If you are using VS Code to run the Jupyter Notebook:

- In this folder (`Scripts/Aliases/`) create `.vscode/settings.json` with the contents `{ "python.pythonPath": "some path" }`.
- Replace `some path` with the output of `pipenv run which python`, which should look like `/Users/your-username/.local/share/virtualenvs/Aliases-ThvkuffE/bin/python`.
- Restart the VS Code workspace after you add this file.
