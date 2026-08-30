param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Args
)

$repoRoot = Split-Path -Parent $PSScriptRoot
$readmePath = Join-Path $repoRoot 'README.md'

if ($Args.Count -lt 2 -or $Args[0] -ne 'go' -or $Args[1] -ne 'go') {
    Write-Host 'Usage: go go go'
    exit 1
}

Write-Host 'Refreshing the repository README and committing the latest updates...'

Set-Location $repoRoot

if (-not (Test-Path $readmePath)) {
    throw "README.md was not found in $repoRoot"
}

$changes = git status --porcelain
if (-not $changes) {
    Write-Host 'No changes to commit. The repository is already in sync.'
    exit 0
}

git add .
$commitMessage = 'docs: refresh README and sync code updates'
git commit -m $commitMessage

if ($LASTEXITCODE -ne 0) {
    Write-Host 'Commit failed. Review git status and fix the repository state before running again.'
    exit $LASTEXITCODE
}

Write-Host "Committed successfully: $commitMessage"
