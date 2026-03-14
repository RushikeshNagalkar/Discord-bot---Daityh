import discord
from discord.ext import commands
import os
from dotenv import load_dotenv

# Load token from .env
load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")

# Configure bot intents
intents = discord.Intents.default()
intents.message_content = True  # Required to read messages

# Create bot instance
bot = commands.Bot(command_prefix="!", intents=intents)

# Event: Bot is online
@bot.event
async def on_ready():
    print(f"Bot is online as {bot.user}")

# Command: !hello
@bot.command()
async def hello(ctx):
    await ctx.send(f"Hello {ctx.author.name}!")

# Run the bot
bot.run(TOKEN)