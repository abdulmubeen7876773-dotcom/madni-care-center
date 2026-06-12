@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo === Madni Care Center — local site ===
echo.
echo Browser mein yeh URL kholein:
echo   http://localhost:8080
echo.
echo Band karne ke liye is window mein Ctrl+C dabayein.
echo NOTE: index.html ko double-click mat karein — server se hi kholein.
echo.

start "" "http://localhost:8080/"

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 8080
pause
