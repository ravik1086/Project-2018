import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(dataSource: any, searchText: any): any {
    if(searchText == null) return dataSource;

    return dataSource.filter(function(data){
      return data.courseName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
