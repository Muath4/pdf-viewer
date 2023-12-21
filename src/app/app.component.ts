import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import * as pdfjsLib from 'pdfjs-dist';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  sanitizer = inject(DomSanitizer);

  title = 'pdf-viewer';

  pdfViewerUrl?: SafeResourceUrl;

  pathToViewer4 = 'assets/pdfjs-4.0.269-dist/web/viewer.html';

  // pdfWorkerSourcePath = 'src/assets/pdfjs-3.11.174-dist/build/pdf.worker.*';

  buildingSystemPdf =
    'https://mapservice.alriyadh.gov.sa/BuildingSystem/building-code-report-experimental?parcelId=14289493';

  dummyPdf =
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  dummyPdf2Pages = 'https://www.africau.edu/images/default/sample.pdf';

  ngOnInit() {
    this.pdfViewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.pathToViewer4}?file=${encodeURIComponent(this.dummyPdf2Pages)}`
    );
  }
}

// pdfjsLib.GlobalWorkerOptions.workerSrc = this.pdfWorkerSourcePath;

/* 
"assets": [
              "src/favicon.ico",
              "src/assets",
              {
                "glob": "pdf.worker.*",
                "input": "node_modules/pdfjs-dist/build/",
                "output": ""
              } 
            ]
*/
