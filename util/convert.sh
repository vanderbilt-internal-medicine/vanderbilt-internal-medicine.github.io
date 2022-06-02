find ./ -iname "*.docx" -type f -exec sh -c 'pandoc --extract-media=images "${0}" -t gfm -o "./$(basename ${0%.docx}.md)"' {} \;
