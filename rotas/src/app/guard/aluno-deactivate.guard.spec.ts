import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { alunoDeactivateGuard } from './aluno-deactivate.guard';

describe('alunoDeactivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alunoDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
