import { BehaviorSubject } from 'rxjs';

/** Nested node */
export class ConceptNode {
  childrenChange = new BehaviorSubject<ConceptNode[]>([]);
  private childPackSize: number = 5;
  private childPage: number = 0;
  public label: string;
  private allChildren: ConceptNode[];
  public parent: ConceptNode;
  public conceptIri: string;
  public leaf: boolean
  private paginatorNode: ConceptNode;

  /**********
  this gets the children for the current
  "page"
  **********/
  get children(): ConceptNode[] {
    return [...this.childrenChange.value];
  }

  /***********
  this gets all children regardless of page
  **********/
  getAllChildren(): ConceptNode[] {
    return [...this.allChildren]
  }

  constructor(private conceptNodeParameter: ConceptNodeParameter) { this.initialize(); }

  initialize() {
    this.label = this.conceptNodeParameter.label;
    this.allChildren = this.conceptNodeParameter.allChildren;
    this.parent = this.conceptNodeParameter.parent;
    this.conceptIri = this.conceptNodeParameter.conceptIri;
    this.leaf = this.conceptNodeParameter.leaf;
    if (this.allChildren) {
      let currentKids = [...this.allChildren];
      if (currentKids.length > 11) {
        currentKids = currentKids.slice(0, this.childPackSize);
        this.paginatorNode = new ConceptNode({ label: "PAGINATOR_" + this.label, parent: this })
        currentKids.push(this.paginatorNode)
        this.childPage++;
      }
      this.childrenChange.next(currentKids)
    }

  }

  public updateChildren(pageNumber: number, childRange: number) {
    this.childPage = pageNumber;

    let end = pageNumber * childRange;
    let start = end - (childRange);
    if (end > this.allChildren.length)
      end = this.allChildren.length;
    let currentKids = this.allChildren.slice(start, end)
    currentKids.push(this.paginatorNode);
    this.childrenChange.next(currentKids);

  }

  public getChildNodePage(childRange: number, childName: string): number {
    let childIndex: number;
    let page = 1;
    this.allChildren.forEach((node, idx) => {
      if (node.label == childName) {
        childIndex = idx;
      }
    })
    if (childIndex && childIndex != 0) {
      page = Math.floor(childIndex / childRange) + 1;
    }
    return page;
  }


}
