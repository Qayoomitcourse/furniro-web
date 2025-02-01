import { structure } from 'sanity/structure';

type StructureResolver = (S: any) => any;

export const myStructure: StructureResolver = (S) =>
  structure()
    .title('Ecommerce')
    .items([
      S.documentTypeListItem('product').title('Product'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => item.getId() && !['product'].includes(item.getId()!),
      ),
    ]);