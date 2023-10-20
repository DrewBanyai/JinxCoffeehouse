import os

#  Read in the index.html file to to a variable
indexHTML = None
with open("./index.html", "r") as f:
     indexHTML = f.read()
     f.close()

#  Read in the 404.html file to to a variable
fourOhFourHTML = None
with open("./404.html", "r") as f:
     fourOhFourHTML = f.read()
     f.close()

def ReplaceNextRefInFile(file):
     fileData = None
     print("ReplaceNextRefInFile(): " + file)
     with open(file, "r") as f:
          fileData = f.read()
          f.close()
     fileData = fileData.replace('/_next', './next')
     with open(file, 'w') as f:
          f.write(fileData)
          f.close()

#  Change all references in the HTML from /_next to /next
indexHTML = indexHTML.replace('/_next', './next')
fourOhFourHTML = fourOhFourHTML.replace('/_next', './next')

#  Rename the /_next folder to /next (if it exists)
try:
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
               os.rename(dirpath + "\\" +  file, dirpath + "\\" +  file[1:len(file)])

               indexHTML = indexHTML.replace(dirpath + "\\" +  file, dirpath + "\\" +  file[1:len(file)])
               indexHTML = indexHTML.replace(forwardSlash1, forwardSlash2)
               fourOhFourHTML = fourOhFourHTML.replace(dirpath + "\\" +  file, dirpath + "\\" +  file[1:len(file)])
               fourOhFourHTML = fourOhFourHTML.replace(forwardSlash1, forwardSlash2)
          if (file[0:4] == "main"):
               ReplaceNextRefInFile(dirpath + "\\" +  file)

#  Write the altered data back to the index HTML file
with open("./index.html", 'w') as f:
    f.write(indexHTML)
    f.close()
    
#  Write the altered data back to the 404 HTML file
with open("./404.html", 'w') as f:
    f.write(fourOhFourHTML)
    f.close()