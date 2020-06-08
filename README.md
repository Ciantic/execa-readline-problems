First start in new Powershell window the test.js

```powershell
node .\test.js
```

Then in second window, observe that tsc is running:

```powershell
Get-CIMInstance -ClassName Win32_Process | Where-Object {$_.CommandLine -like "*node.exe*tsc*"} | Select-Object ProcessID, CommandLine
```

```
ProcessID CommandLine
--------- -----------
    23624 "C:\Copies\Node\\node.exe"   "C:\Copies\Node\\node_modules\typescript\bin\tsc" --noEmit --watch
```

Then send Ctrl+C to first window and notice that test.js is killed.

Then try this again:

```powershell
Get-CIMInstance -ClassName Win32_Process | Where-Object {$_.CommandLine -like "*node.exe*tsc*"} | Select-Object ProcessID, CommandLine
```

Notice that same process is still running, you should get:

```powershell
ProcessID CommandLine
--------- -----------
    23624 "C:\Copies\Node\\node.exe"   "C:\Copies\Node\\node_modules\typescript\bin\tsc" --noEmit --watch
```

Now you must stop it forcefully:

```powershell
Stop-Process 23624
```