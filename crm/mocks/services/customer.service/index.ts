import createSpyObj = jasmine.createSpyObj;
import {of} from "rxjs";
import {customersMock} from "../../api/customers";

export const customerServiceMockFactory = () => {
  const customerServiceMock = createSpyObj('CustomerService',
    [
      'getAll',
      'getOne',
      'deleteOne',
      'putOne',
      'postOne'
    ]
    )

  customerServiceMock.getAll.and.callFake(() => {
    return of(customersMock);
  });

  customerServiceMock.getOne.and.callFake(() => {
    return of(customersMock[0]);
  });

  customerServiceMock.deleteOne.and.callFake(() => {
    return of({});
  });

  customerServiceMock.putOne.and.callFake(() => {
    return of(customersMock[0]);
  });

  customerServiceMock.postOne.and.callFake(() => {
    return of(customersMock[0]);
  });

  return customerServiceMock;

};


