import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceiptScannerService } from './receipt-scanner.service';
import { CreateReceiptScannerDto } from './dto/create-receipt-scanner.dto';
import { UpdateReceiptScannerDto } from './dto/update-receipt-scanner.dto';

@Controller('receipt-scanner')
export class ReceiptScannerController {
  constructor(private readonly receiptScannerService: ReceiptScannerService) {}

  @Post()
  create(@Body() createReceiptScannerDto: CreateReceiptScannerDto) {
    return this.receiptScannerService.create(createReceiptScannerDto);
  }

  @Get()
  findAll() {
    return this.receiptScannerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receiptScannerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceiptScannerDto: UpdateReceiptScannerDto) {
    return this.receiptScannerService.update(+id, updateReceiptScannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receiptScannerService.remove(+id);
  }
}
