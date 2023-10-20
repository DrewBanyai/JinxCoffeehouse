import os

#  Read in the index.html file to to a variable
html = None
with open("./index.html", "r") as f:
     html = f.read()
     f.close()

#  Rename the _next filder and change all references to it as well
try:
     html = html.replace('/_next', './next')
     os.rename('./_next/', './next/')
except Exception as e:
     print("File Not Found: './_next'. Skipping step...")

#  Rename the _app file and change all references to it as well
for dirpath, dirs, files in os.walk("."):
     for file in files:
          if (file[0:1] == '_'):
               print("replacing [" + dirpath + "\\" +  file + "] with [" + dirpath + "\\" +  file[1:len(file)] + "]")
               forwardSlash1 = (dirpath + "\\" +  file).replace("\\", "/")
               forwardSlash2 = (dirpath + "\\" +  file[1:len(file)]).replace("\\", "/")
               html = html.replace(dirpath + "\\" +  file, dirpath + "\\" +  file[1:len(file)])
               html = html.replace(forwardSlash1, forwardSlash2)
               os.rename(dirpath + "\\" +  file, dirpath + "\\" +  file[1:len(file)])

#  Write the altered data back to the index.html file
with open("./index.html", 'w') as f:
    f.write(html)
    f.close()