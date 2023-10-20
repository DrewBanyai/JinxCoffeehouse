import os

#  Read in the index.html file to to a variable
file = None
with open("./index.html", "r") as f:
     file = f.read()
     f.close()

#  Rename the _next filder and change all references to it as well
try:
     file = file.replace('/_next', './next')
     os.rename('./_next/', './next/')
except Exception as e:
     print("File Not Found: './_next'. Skipping step...")


#  Rename the _app file and change all references to it as well
try:
     os.rename('./next/static/chunks/pages/_app-413e47489d0189a1538b.js', './next/static/chunks/pages/app-413e47489d0189a1538b.js')
     file = file.replace('next/static/chunks/pages/_app-413e47489d0189a1538b.js', 'next/static/chunks/pages/app-413e47489d0189a1538b.js')
except Exception as e:
     print("File Not Found: './next/static/chunks/pages/_app-413e47489d0189a1538b.js'. Skipping step...")

#  Write the altered data back to the index.html file
with open("./index.html", 'w') as f:
    f.write(file)
    f.close()