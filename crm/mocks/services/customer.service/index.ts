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

  return customerServiceMock;

};


