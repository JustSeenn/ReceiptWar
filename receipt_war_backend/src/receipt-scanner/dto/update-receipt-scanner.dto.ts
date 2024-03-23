import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptScannerDto } from './create-receipt-scanner.dto';

export class UpdateReceiptScannerDto extends PartialType(CreateReceiptScannerDto) {}
