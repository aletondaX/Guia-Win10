@echo off
chcp 65001 >nul
title Configuración de Servicios para Windows 10 by AleTonda

echo [45m                                                           [0m
echo [45m  Configuración de Servicios para Windows 10, by AleTonda  [0m
echo [45m                                                           [0m
echo [45m   *Usar luego de la config de servicios de Chris Titus*   [0m
echo [45m                                                           [0m

timeout /t 3 /nobreak >nul

:seleccionPC
echo.
echo Selecciona tu tipo de PC:
echo.
echo 1. PC de Escritorio
echo 2. Notebook
echo.
SET /P PC=Escribe [45m 1 [0m o [45m 2 [0m y presiona ENTER para continuar:

IF %PC% NEQ 1 call :comprobacionDos

echo.
echo Configurando servicios...
timeout /t 2 /nobreak >nul
echo.

echo - WaaSMedicSvc
sc config "WaaSMedicSvc" start=disabled
echo - wuauserv
sc config "wuauserv" start=disabled
echo - UsoSvc
sc config "UsoSvc" start=disabled
echo - DoSvc
sc config "DoSvc" start=disabled
echo - BITS
sc config "BITS" start=disabled
echo - LanmanServer
sc config "LanmanServer" start=disabled
echo - DusmSvc
sc config "DusmSvc" start=disabled
echo - OneSyncSvc
sc config "OneSyncSvc" start=disabled
echo - CDPUserSvc
sc config "CDPUserSvc" start=disabled
echo - NcbService
sc config "NcbService" start=disabled
echo - CDPSvc
sc config "CDPSvc" start=disabled
echo - RmSvc
sc config "RmSvc" start=disabled
echo - wcncsvc
sc config "wcncsvc" start=disabled
echo - XboxNetApiSvc
sc config "XboxNetApiSvc" start=disabled
echo - SSDPSRV
sc config "SSDPSRV" start=disabled
echo - SstpSvc
sc config "SstpSvc" start=disabled
echo - RasMan (Manual)
sc config "RasMan" start=demand
echo - DispBrokerDesktopSvc
sc config "DispBrokerDesktopSvc" start=disabled
echo - WSearch
sc config "WSearch" start=disabled
echo - dmwappushservice
sc config "dmwappushservice" start=disabled
echo - DPS
sc config "DPS" start=disabled
echo - WdiServiceHost
sc config "WdiServiceHost" start=disabled
echo - WdiSystemHost
sc config "WdiSystemHost" start=disabled
echo - Themes
sc config "Themes" start=disabled
echo - TermService
sc config "TermService" start=disabled
echo - PolicyAgent
sc config "PolicyAgent" start=disabled
echo - lmhosts
sc config "lmhosts" start=disabled
echo - IKEEXT
sc config "IKEEXT" start=disabled
echo - TrkWks (Manual)
sc config "TrkWks" start=demand
echo - BthAvctpSvc
sc config "BthAvctpSvc" start=disabled
echo - lfsvc
sc config "lfsvc" start=disabled
echo - TabletInputService
sc config "TabletInputService" start=disabled
echo - VaultSvc (Manual)
sc config "VaultSvc" start=demand
echo - BcastDVRUserService
sc config "BcastDVRUserService" start=disabled
echo - KeyIso (Manual)
sc config "KeyIso" start=demand
echo - FontCache (Manual)
sc config "FontCache" start=demand
echo - PcaSvc
sc config "PcaSvc" start=disabled
echo - DeviceAssociationService (Manual)
sc config "DeviceAssociationService" start=demand
echo - MSDTC
sc config "MSDTC" start=disabled
echo - BDESVC
sc config "BDESVC" start=disabled
echo - NcaSvc
sc config "NcaSvc" start=disabled
echo - iphlpsvc
sc config "iphlpsvc" start=disabled
echo - Sense
reg add "HKLM\SYSTEM\CurrentControlSet\Services\Sense" /v "Start" /t REG_DWORD /d "4" /f
echo - SgrmBroker
reg add "HKLM\SYSTEM\CurrentControlSet\Services\SgrmBroker" /v "Start" /t REG_DWORD /d "4" /f
echo - WinHttpAutoProxySvc
reg add "HKLM\SYSTEM\CurrentControlSet\Services\WinHttpAutoProxySvc" /v "Start" /t REG_DWORD /d "4" /f
echo - wscsvc
reg add "HKLM\SYSTEM\CurrentControlSet\Services\wscsvc" /v "Start" /t REG_DWORD /d "4" /f
echo - BFE
reg add "HKLM\SYSTEM\CurrentControlSet\Services\BFE" /v "Start" /t REG_DWORD /d "4" /f
echo - SecurityHealthService
reg add "HKLM\SYSTEM\CurrentControlSet\Services\SecurityHealthService" /v "Start" /t REG_DWORD /d "4" /f
echo - WinDefend
reg add "HKLM\SYSTEM\CurrentControlSet\Services\WinDefend" /v "Start" /t REG_DWORD /d "4" /f
echo - MapsBroker
sc config "MapsBroker" start=disabled
IF %PC%==1 (
echo - WlanSvc
sc config "WlanSvc" start=disabled
echo - WwanSvc
sc config "WwanSvc" start=disabled
echo - Wcmsvc
sc config "Wcmsvc" start=disabled
)
echo.
echo [45mOK![0m
echo.

timeout /t 2 /nobreak >nul

echo #######################################################
echo.
SET /P PRINT=Deshabilitar servicio Cola de Impresión? (Necesario para imprimir) (S/N):
IF /I %PRINT%==S sc config "Spooler" start=disabled
echo.
echo #######################################################
echo.
echo [45m¡ALERTA![0m
echo Deshabilitar WpnUserService deshabilita las notificaciones de Windows.
echo También rompe las siguientes settings: "Red" y "Asistente de Concentración".
SET /P WPN=Deshabilitar WpnUserService? (S/N):
IF /I %WPN%==S (
sc config "WpnUserService" start=disabled
sc config "WpnService" start=disabled
)
echo.
echo #######################################################
echo.
echo [45m¡ALERTA![0m
echo Deshabilitar AppXSvc rompe las siguientes settings: "Sistema > Acerca de".
SET /P APPX=Deshabilitar AppXSvc? (S/N):
IF /I %APPX%==S reg add "HKLM\SYSTEM\CurrentControlSet\Services\AppXSvc" /v "Start" /t REG_DWORD /d "4" /f
echo.
echo #######################################################
echo.
echo [45m¡ALERTA![0m
echo Deshabilitar TokenBroker rompe las siguientes settings: "Sistema > Portapapeles".
SET /P TKN=Deshabilitar TokenBroker? (S/N):
IF /I %TKN%==S sc config "TokenBroker" start=disabled
echo.
echo #######################################################
echo.
REM echo [45m¡ALERTA![0m
echo Es posible deshabilitar servicios adicionales, con el riesgo de que algunas aplicaciones dejen de funcionar. Esto incluye, por ejemplo, el uso de BlueTooth.
echo Debido al riesgo, solo lo recomiendo para usuarios avanzados.
SET /P EXTRA=Deshabilitar servicios adicionales? (S/N):
IF /I %EXTRA%==N (
goto :fin
)
IF /I %EXTRA%==S (
echo - AppReadiness
sc config "AppReadiness" start=disabled
echo - StorSvc
sc config "StorSvc" start=disabled
echo - BTAGService
sc config "BTAGService" start=disabled
echo - bthserv
sc config "bthserv" start=disabled
echo - diagsvc
sc config "diagsvc" start=disabled
echo - HvHost
sc config "HvHost" start=disabled
echo - icssvc
sc config "icssvc" start=disabled
echo - IpxlatCfgSvc
sc config "IpxlatCfgSvc" start=disabled
echo - MessagingService
sc config "MessagingService" start=disabled
echo - MsKeyboardFilter
sc config "MsKeyboardFilter" start=disabled
echo - NaturalAuthentication
sc config "NaturalAuthentication" start=disabled
echo - PeerDistSvc
sc config "PeerDistSvc" start=disabled
echo - PhoneSvc
sc config "PhoneSvc" start=disabled
echo - PimIndexMaintenanceSvc
sc config "PimIndexMaintenanceSvc" start=disabled
echo - RetailDemo
sc config "RetailDemo" start=disabled
echo - RpcLocator
sc config "RpcLocator" start=disabled
echo - SCardSvr
sc config "SCardSvr" start=disabled
echo - ScDeviceEnum
sc config "ScDeviceEnum" start=disabled
echo - SCPolicySvc
sc config "SCPolicySvc" start=disabled
echo - SEMgrSvc
sc config "SEMgrSvc" start=disabled
echo - SensorDataService
sc config "SensorDataService" start=disabled
echo - SensorService
sc config "SensorService" start=disabled
echo - SensrSvc
sc config "SensrSvc" start=disabled
echo - SessionEnv
sc config "SessionEnv" start=disabled
echo - SharedAccess
sc config "SharedAccess" start=disabled
echo - SmsRouter
sc config "SmsRouter" start=disabled
echo - TroubleshootingSvc
sc config "TroubleshootingSvc" start=disabled
echo - UmRdpService
sc config "UmRdpService" start=disabled
echo - UnistoreSvc
sc config "UnistoreSvc" start=disabled
echo - UserDataSvc
sc config "UserDataSvc" start=disabled
echo - wercplsupport
sc config "wercplsupport" start=disabled
echo - WerSvc
sc config "WerSvc" start=disabled
echo - wisvc
sc config "wisvc" start=disabled
echo - wlidsvc
sc config "wlidsvc" start=disabled
echo - xbgm
sc config "xbgm" start=disabled
rem NcdAutoSetup detecta dispositivos como Smart TVs
echo - NcdAutoSetup
sc config "NcdAutoSetup" start=disabled
echo - WdFilter
sc config "WdFilter" start=disabled
echo - LanmanWorkstation
sc config "LanmanWorkstation" start=disabled
echo - EventSystem
sc config "EventSystem" start=disabled
echo - SENS
sc config "SENS" start=disabled
echo.
goto :soloPC
)

:soloPC
IF /I %PC%==1 (
echo - DisplayEnhancementService
sc config "DisplayEnhancementService" start=disabled
)
echo.
echo [45mOK![0m

timeout /t 2 /nobreak >nul

:fin
echo.
echo #######################################################
echo.
SET /P REINICIAR=Reiniciar el equipo? (S/N):
If /I %REINICIAR%==S (shutdown -r -t 3) else exit

:comprobacionDos
IF %PC% NEQ 2 (
cls
goto :seleccionPC
) ELSE goto :eof