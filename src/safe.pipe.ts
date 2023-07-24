import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
 
 
   transform(v: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(v);
}

}
