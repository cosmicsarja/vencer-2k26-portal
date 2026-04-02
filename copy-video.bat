@echo off
REM Copy video to project
IF NOT EXIST "public\videos" mkdir public\videos
echo Copying video from D:\gta\intro.mp4 to public\videos\intro.mp4...
copy "D:\gta\intro.mp4" "public\videos\intro.mp4"
IF %ERRORLEVEL% EQU 0 (
    echo.
    echo ✓ Video copied successfully!
    echo ✓ File size: 
    for %%A in ("public\videos\intro.mp4") do echo   %%~zA bytes
    echo.
    echo Your video is ready at: public/videos/intro.mp4
) ELSE (
    echo ✗ Error copying file
    echo Check if D:\gta\intro.mp4 exists
)
pause
