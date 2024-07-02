export interface IBook {
  id: number;
  title: string;
  author: string;
  publisher: string;
  genre: string;
  isbnNo: string;
  numOfPages: number;
  totalNumOfCopies: number;
  availableNumberOfCopies: boolean;
}
