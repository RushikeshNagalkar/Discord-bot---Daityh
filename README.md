# Discord-bot---Daityh





Starting with Python env :


1. Inside the folder, run cmd "python -m venv venv" (Python way to create a virtual environment)
#  You should see a new folder called venv. Inside it, there are several subfolders

2. Activate the Virtual Environment run cmd "venv\Scripts\activate."
# Before installing anything, you need to activate it so Python uses this isolated environment.
# After activation, your cmd should change to something like this: (venv) C:\E_Drive\Discord-bot---Daityh\bot_python>

3. Step After Activation: Now you can install the Discord library safely, run in cmd "pip install discord.py python-dotenv."
# discord.py → Makes your bot talk to Discord.
# python-dotenv → Lets you store your bot token safely in a .env file instead of putting it in the code.

4.In your bot folder (C:\E_Drive\Discord-bot---Daityh\bot_python), create a file called .env and add "DISCORD_TOKEN=your_bot_token_here".
# Replace your_bot_token_here with the token from your bot application.
# Reason: Keeps your token secret so it’s not directly in the code.

5. Step After .env: Create bot.py and add your code to it

6. To activate the bot in cmd run "python bot.py."


Fixing ModuleNotFoundError: No module named 'discord' in Windows venv

ISSUE:
- Python cannot find discord.py when running bot.py.
- Even with the virtual environment active, the library might not be installed in the venv or installed in a different Python.

STEPS TO FIX:

1. Check if the virtual environment is active
   - Terminal should show (venv) at the start of the prompt:
     (venv) C:\E_Drive\Discord-bot---Daityh\bot_python>

2. Check Python paths
   - Run:
     python -m site
   - Look for venv\Lib\site-packages in the output
   - This confirms Python is using the correct virtual environment

3. Reinstall libraries in the venv
   - Run:
     python -m pip install --upgrade pip
     python -m pip install --force-reinstall discord.py python-dotenv
   - --force-reinstall ensures it installs in this venv, not globally

4. Verify installation
   - Run:
     python -m pip show discord.py
   - Location should point inside:
     C:\E_Drive\Discord-bot---Daityh\bot_python\venv\Lib\site-packages

5. Run your bot
   - Run:
     python bot.py
   - Terminal should show:
     Bot is online as YourBotName
   - Then test in Discord with a command like "!hello."

COMMON CAUSES:
- Virtual environment not activated
- discord.py installed in global Python instead of venv
- Typo in commands (e.g., ython -m site instead of python -m site)

TIP:
- Always use python -m pip install ... to ensure packages install in the Python version you are running
