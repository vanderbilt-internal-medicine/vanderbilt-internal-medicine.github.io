find ./ -iname "*.docx" -type f -exec sh -c 'pandoc --extract-media=output "${0}" -t gfm -o "./output/$(basename ${0%.docx}.md)"' {} \;
