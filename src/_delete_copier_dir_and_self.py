import sys
import subprocess
import pathlib


def delete_folder(pth):
    for sub in pth.iterdir():
        if sub.is_dir():
            delete_folder(sub)
        else:
            sub.unlink()
    pth.rmdir()


print("--- FINAL STEP: CLEANING-UP the .copier temp directory ---")
delete_folder(pathlib.Path()/'.copier')
subprocess.Popen(
    "python -c \"import os, time; time.sleep(1); os.remove('{}');\"".format(sys.argv[0]), shell=True)
sys.exit(0)
