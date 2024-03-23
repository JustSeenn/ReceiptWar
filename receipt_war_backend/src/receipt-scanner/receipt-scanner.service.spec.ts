import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptScannerService } from './receipt-scanner.service';

describe('ReceiptScannerService', () => {
  let service: ReceiptScannerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceiptScannerService],
    }).compile();

    service = module.get<ReceiptScannerService>(ReceiptScannerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
