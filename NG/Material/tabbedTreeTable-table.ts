import * as moment from "moment";


interface filterSelectObj {
  name: string,
  columnProp: string,
  options: Array<any>
}



@Component({
})
export class Filteredtable implements OnInit {
  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    if (sort) {
      this.sort = sort;
      this.tableData.sort = this.sort;
    }
  };
  @Input() data: any;

  tableData: any;
  tableHeaders: Array<string> = ["headerONe", "hTwo"];
  tableHeaderAndDataTranslation = {
    headerONe: "headerOne",
    headerTwo: "headerTwo"
  };
  filterValues = {};
  filterSelectObjs: Array<filterSelectObj> = [];
  sort: any;
  filterHeaders: Array<string> = [];


  constructor(
  ) { }

  ngOnInit() {
    this.TableData = new MatTableDataSource(this.Data);
    this.TableData.filterPredicate = this.getFilter(this.tableHeaderAndDataTranslation);

    this.setFilterHeaders();
    this.setFilterObjs();
  }




  setFilterObjs() {
    this.filterSelectObjs = this.TableHeaders.map(Header => {
      return { name: Header.toUpperCase(), columnProp: Header + "-f", options: [] }
    });
  }

  setFilterHeaders() {
    this.filterHeaders = this.TableHeaders.map(Header => Header + "-f");


  }

  go(route: string) {
    this.router.navigate([route]);
  }

  filterChange($ev, ontAttr) {
    this.filterValues[Attr.slice(0, -2)] = $ev.target.value.trim().toLowerCase()
    this.TableData.filter = JSON.stringify(this.filterValues)
  }

  selectBrowseResult(result: any) {
    window.scroll(0, 0);
    let id = encodeURIComponent(result['id']);
    let matched = '*';
    this.go(`/data/${id}/${dataID}/${matched}`);
  }

  selectInTreeTab(concept: any) {
    this.srv.updatedata(dataInTree);


  }


  // Custom filter method fot Angular Material Datatable
  getFilter(rawDataColumns: any) {
    return function(data: any, filter: string): boolean {
      let found = false;
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }
      if (isFilterSet) {
        //if there is a match in any column, return the data
        for (const col in searchTerms) {
          let valueToSearch = searchTerms[col].trim().toLowerCase();
          let rawDataKey = rawDataColumns[col]
          let dataInColumn = data[rawDataKey];
          if (dataInColumn) {
            if (rawDataKey == "date") {
              dataInColumn = moment(date).format('MMM D,YYYY');
            }
            if (dataInColumn.toString().toLowerCase().indexOf(valueToSearch) != -1) {
              found = true
            }
          }
        }
      }
      else {
        found = true;
      }
      return found;
    }
  }

  //html
    <!--ng material table-- >
  <table mat - table[dataSource]="TableData" matSort >
    <!--first header row-- >
      <ng-container matColumnDef = "headerOne" >
        <th mat - header - cell * matHeaderCellDef mat - sort - header class="header-title" > headerOne < /th>
          < td mat - cell * matCellDef="let element"(click) = "selectResult(element)" > {{ element.shortName }} </td>
            < /ng-container>
            < ng - container matColumnDef = "headerTwo" >
              <th mat - header - cell * matHeaderCellDef mat - sort - header class="header-title" > HeaderTwo < /th>
                < td mat - cell * matCellDef="let element"(click) = "selectResult(element)" > {{ element.headerTwo }} </td>
                  < /ng-container>
                  < td mat - cell * matCellDef="let element"(click) = "selectResult(element)" >
                    <div>{{ element.date | date }}</div>
                      < /td>
                      < /ng-container>
                      < ng - container matColumnDef = "description" >
                        <th mat - header - cell * matHeaderCellDef mat - sort - header class="header-title" >
                          Description
                          < /th>
                          < td mat - cell * matCellDef="let element"(click) = "selectResult(element)" >
                            <div * ngIf="element.description"[innerHTML] = "element.description.slice(0,150)" >
                              </div>
                              < /td>
                              < /ng-container>
                              < ng - container matColumnDef = "additionalColumn" >
                                <th mat - header - cell * matHeaderCellDef class="header-title" > additional Column < /th>
                                  < td mat - cell * matCellDef="let element"(click) = "dosomething(element)" >
                                    <a>
                                    <span>additional column < /span>
                                      < /a>
                                      < /td>
                                      < /ng-container>


                                      < !--2nd filter row-- >
                                        <ng-container * ngFor=" let filterHeader of filterHeaders" matColumnDef = {{ filterHeader }}>
                                          <ng-container * ngIf="(filterHeader !== 'additionalColumn-filter')" >
                                            <th mat - header - cell * matHeaderCellDef class="second-header" >
                                              <mat-form - field appearance = "outline" >
                                                <mat-label > Filter < /mat-label>
                                                < input matInput(keyup) = "filterChange($event,filterHeader)" placeholder = "ex text to filter" #filterInput >
                                                  </mat-form-field>
                                                  < /th>
                                                  < /ng-container>
                                                  < ng - container * ngIf="(filterHeader == 'requestChanges-filter')" >
                                                    <th mat - header - cell * matHeaderCellDef >
                                                    <div>

                                                    </div>
                                                    < /th>
                                                    < td mat - cell * matCellDef="let element"(click) = "doSomething()" >
                                                      {{ element }}
</td>
  < /ng-container>
  < /ng-container>
  < tr mat - header - row * matHeaderRowDef="TableHeaders" > </tr>
    < tr mat - header - row * matHeaderRowDef="filterHeaders" > </tr>
      < tr mat - row * matRowDef="let row; columns: TableHeaders;" > </tr>
        < /table>
        < /div>

}
