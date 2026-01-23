# PowerShell script to convert HTML to PDF using Microsoft Edge
$htmlPath = "C:\Users\User\.gemini\antigravity\scratch\fnb-website\Dayang_Cafe_Business_Profile.html"
$pdfPath = "C:\Users\User\.gemini\antigravity\scratch\fnb-website\Dayang_Cafe_Business_Profile.pdf"

# Check if Microsoft Edge is available
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

if (Test-Path $edgePath) {
    # Use Edge to print to PDF
    Start-Process -FilePath $edgePath -ArgumentList "--headless", "--disable-gpu", "--print-to-pdf=`"$pdfPath`"", "`"$htmlPath`"" -Wait
    Write-Host "PDF created successfully at: $pdfPath"
} else {
    Write-Host "Microsoft Edge not found. Trying alternative method..."
    
    # Alternative: Try using Chrome if available
    $chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
    if (-not (Test-Path $chromePath)) {
        $chromePath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    }
    
    if (Test-Path $chromePath) {
        Start-Process -FilePath $chromePath -ArgumentList "--headless", "--disable-gpu", "--print-to-pdf=`"$pdfPath`"", "`"$htmlPath`"" -Wait
        Write-Host "PDF created successfully using Chrome at: $pdfPath"
    } else {
        Write-Host "Neither Edge nor Chrome found. Please install one of these browsers or use the HTML file to print to PDF manually."
    }
}
