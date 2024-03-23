import { Test, TestingModule } from '@nestjs/testing';
import { ReceiptScannerController } from './receipt-scanner.controller';
import { ReceiptScannerService } from './receipt-scanner.service';

describe('ReceiptScannerController', () => {
  let controller: ReceiptScannerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceiptScannerController],
      providers: [ReceiptScannerService],
    }).compile();

    controller = module.get<ReceiptScannerController>(ReceiptScannerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
