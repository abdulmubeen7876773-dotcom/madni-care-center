@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo [INFO] React/Vite app isi project mein ab setup nahi hai.
echo        Site chalane ke liye "start-site.bat" use karein.
echo.
echo Browser: http://localhost:8080
echo.
call "%~dp0start-site.bat"
