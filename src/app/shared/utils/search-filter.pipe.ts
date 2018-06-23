import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(dataSource: any, searchText: any): any {
    if (dataSource) {
      if (searchText == null) return dataSource;

      if (searchText) {
        return dataSource.filter(item => {
          return Object.keys(item).some(
            k => {
              if (item[k] != null && item[k] != undefined && typeof item[k] == 'string')
                return item[k].includes(searchText.toLowerCase());
            }
          );
        });
      }
      return dataSource;
    }

  }

}
