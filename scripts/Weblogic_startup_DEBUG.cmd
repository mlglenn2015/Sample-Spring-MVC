@ECHO OFF
setlocal
title MYAPPLICATION WebLogic 12c Managed Server

rem Change these to reflect your environment
set NUMBER_OF_THREADS=10
set MANAGED_SERVER_NAME=managed01
set DOMAIN_DIR=C:\Oracle\Middleware\Oracle_Home\user_projects\domains\mydomain
set JAVA_HOME=C:\Java\jdk1.8.0_65
@REM ########################################################################################################
@REM USER DEFINED OPTIONS FOR Weblogic 12c
set JAVA_OPTIONS=%JAVA_OPTIONS% -Xrunjdwp:transport=dt_socket,address=10171,server=y,suspend=n -Xmx512m
set JAVA_OPTIONS=%JAVA_OPTIONS% -XX:MaxPermSize=256m -DENVIRONMENT=local -DAPP_LOG_LOCATION=C:\log -Dapp.soap.tracing=true -Dspring.profiles.active=local  -Djavax.net.ssl.keyStore=C:\Users\mykeystore.jks -Djavax.net.ssl.keyStorePassword= -Djavax.net.ssl.password= -Djavax.net.ssl.trustStore=C:\Java\jdk1.8.0_65\jre\lib\security\cacerts -Dweblogic.security.SSL.trustedCAKeyStore=C:\Java\jdk1.8.0_65\jre\lib\security\cacerts  -Djavax.net.ssl.trustStore.password= -Dapp.jpa.logging=SEVERE -Dweblogic.security.allowCryptoJDefaultJCEVerification=true -Dweblogic.ProductionModeEnabled=false
@REM set JAVA_OPTIONS=%JAVA_OPTIONS% -Dspring.user.name=springusername -Dspring.user.password=springpassword
set JAVA_OPTIONS=%JAVA_OPTIONS% -debug
@REM ########################################################################################################
echo "Weblogic_startup_DEBUG.cmd: Starting Weblogic..."
echo JAVA_OPTIONS=%JAVA_OPTIONS%
echo NUMBER_OF_THREADS=%NUMBER_OF_THREADS%
echo DOMAIN_DIR=%DOMAIN_DIR%
echo JAVA_HOME=%JAVA_HOME%

cd %DOMAIN_DIR%\bin
startManagedWebLogic.cmd %MANAGED_SERVER_NAME% http://localhost:7001
endlocal
