/** Flat node with expandable and level information */
export interface ConceptFlatNode {
  name: string;
  level: number;
  expandable: boolean;
  parent: any;

}

/*********
nested node in tree
*********/

export interface ConceptNodeParameter {
  label: string;
  allChildren?: ConceptNode[];
  conceptIri?: string;
  childPage?: number;
  parent?: ConceptNode;
  leaf?: boolean;
}
