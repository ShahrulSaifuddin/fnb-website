# PowerShell script to convert HTML to PDF using Microsoft Edge
$htmlPath = "C:\Users\User\.gemini\antigravity\scratch\fnb-website\Profil_Perniagaan_Dayang_Cafe.html"
$pdfPath = "C:\Users\User\.gemini\antigravity\scratch\fnb-website\Profil_Perniagaan_Dayang_Cafe.pdf"

# Check if Microsoft Edge is available
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edgePath)) {
    $edgePath = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
}

if (Test-Path $edgePath) {
    # Use Edge to print to PDF
    Start-Process -FilePath $edgePath -ArgumentList "--headless", "--disable-gpu", "--print-to-pdf=`"$pdfPath`"", "`"$htmlPath`"" -Wait
    Write-Host "PDF Bahasa Melayu berjaya dicipta di: $pdfPath"
} else {
    Write-Host "Microsoft Edge tidak dijumpai. Cuba kaedah alternatif..."
    
    # Alternative: Try using Chrome if available
    $chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
    if (-not (Test-Path $chromePath)) {
        $chromePath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
    }
    
    if (Test-Path $chromePath) {
        Start-Process -FilePath $chromePath -ArgumentList "--headless", "--disable-gpu", "--print-to-pdf=`"$pdfPath`"", "`"$htmlPath`"" -Wait
        Write-Host "PDF Bahasa Melayu berjaya dicipta menggunakan Chrome di: $pdfPath"
    } else {
        Write-Host "Edge mahupun Chrome tidak dijumpai. Sila pasang salah satu daripada pelayar ini atau gunakan fail HTML untuk cetak ke PDF secara manual."
    }
}
