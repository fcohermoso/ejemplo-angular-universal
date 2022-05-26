import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  cambiarInfoSeo(tituloPagina: string, metaData: any) {
    this.title.setTitle(tituloPagina);

    const metaTags = Object.entries(metaData)
      .reduce((acc: any, meta: any) => {
        const [nombre, content] = meta;
        acc.push({nombre, content});
        return acc;
      }, []);

    metaTags.forEach((metaTag: any) => {
      this.meta.updateTag(metaTag);
    });

  }
}
