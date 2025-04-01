import os
import json

# Define the directory where images are stored
IMAGE_DIR = os.path.dirname(os.path.abspath(__file__))  # This script's folder

# Allowed image extensions
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp"}

# Scan the directory and get all image filenames
image_files = [f for f in os.listdir(IMAGE_DIR) if os.path.splitext(f)[1].lower() in ALLOWED_EXTENSIONS]

# JSON file path
json_path = os.path.join(IMAGE_DIR, "imageList.json")

# Write image filenames to JSON
with open(json_path, "w") as json_file:
    json.dump({"images": image_files}, json_file, indent=4)

print(f"✅ Image list updated: {json_path}")
