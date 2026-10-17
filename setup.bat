@echo off
setlocal
for /F %%a in ('echo prompt $E ^| cmd') do set "ESC=%%a"

set "param_1=%~1"

if /i "%param_1%"=="-help" goto HELP
if /i "%param_1%"=="-install" goto INSTALL_DEPENDENCIES
if /i "%param_1%"=="-run" goto RUN

:HELP
echo ==========================
echo           HELP
echo ==========================
echo(
echo %ESC%[32m-Usage: 
echo        %ESC%[0m setup.bat %ESC%[32m-[parameter]
echo(
echo  %ESC%[0mParameters:
echo        %ESC%[32m-help       %ESC%[0mDisplay this help
echo        %ESC%[32m-install    %ESC%[0mInstall dependencies
echo        %ESC%[32m-run        %ESC%[0mStart the frontend server
goto :END


:INSTALL_DEPENDENCIES
call :GO_FRONTEND_FOLDER || exit /b 1 || exit /b 1

echo %ESC%[33m[STEP 1/4]%ESC%[0m Installing dependencies...
call npm install
if errorlevel 1 (
    echo %ESC%[31m[ERROR]%ESC%[0m Failed to run "npm install"
    goto END
)

echo %ESC%[33m[STEP 2/4]%ESC%[0mChecking Vite...
call npm ls vite --depth=0 >nul 2>&1
if errorlevel 1 (
    echo Vite is not installed. Installing...
    call npm install -D vite
    if errorlevel 1 (
        echo %ESC%[31m[ERROR]%ESC%[0m Failed to install Vite.
        goto END
    )
)

echo %ESC%[33m[STEP 3/4]%ESC%[0m Dependencies installed successfully.

echo %ESC%[33m[STEP 4/4]%ESC%[0m Checking and fixing vulnerable dependencies...
call npm audit fix

if errorlevel 1 (
    echo [ERROR] npm audit fix failed or some vulnerabilities remain.
    goto END
)

echo %ESC%[33m[SUCCESS]%ESC%[0m Security audit fix completed successfully.
goto END


:RUN
call :GO_FRONTEND_FOLDER || exit /b 1 || exit /b 1

echo Starting Vite server...
call npm run dev
if errorlevel 1 (
    echo %ESC%[31m[ERROR]%ESC%[0m Failed to run "npm run dev".
)
goto END


:GO_FRONTEND_FOLDER || exit /b 1
echo %ESC%[34m[PATH]%ESC%[0m Checking frontend folder...

if not exist "%~dp0frontend\package.json" (
    echo %ESC%[31m[ERROR]%ESC%[0m Frontend folder or package.json does not exist.
    exit /b 1
)

echo %ESC%[34m[PATH]%ESC%[0m Changing directory to frontend...
cd /d "%~dp0frontend"
echo %ESC%[34m[PATH]%ESC%[0m Current folder: %CD%
exit /b 0


:END
endlocal
exit /b 0