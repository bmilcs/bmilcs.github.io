#!/bin/bash

# Source directory containing the images
src_dir="."

# Destination directory for resized images
dest_dir="./processed"

# Ensure the destination directory exists
mkdir -p "$dest_dir"

# Loop through each image file in the source directory
for image in "$src_dir"/*; do
  if [ -f "$image" ]; then
    # Get the base filename without extension
    filename=$(basename -- "$image")
    base_name="${filename%.*}"

    # Resize the image to 681x450 and convert to JPG
    convert "$image" -resize 681x450 -format jpg -quality 85 "$dest_dir/$base_name.jpg"

    echo "Resized and converted: $filename"
  fi
done

echo "All images resized and converted."
