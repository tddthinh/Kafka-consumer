export class EventPayload {
  metadata: MetaPayload;

  data: Object; 
  before: Object; 
  userdata: Object; 
  __striimmetadata: Object; 
  myNewField: Object;
  constructor(init?: Partial<EventPayload>) {
    Object.assign(this, init);
  }
}
export class MetaPayload {
  TableID: number;

  TableName: string;

  TxnID: string;

  OperationName: string;

  FileName: string;

  FileOffset: number;

  TimeStamp: string;
  CSN: string;

  RecordStatus: string;

  constructor(init?: Partial<MetaPayload>) {
    Object.assign(this, init);
  }
}
