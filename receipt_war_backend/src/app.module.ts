import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiptScannerModule } from './receipt-scanner/receipt-scanner.module';

@Module({
  imports: [ReceiptScannerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
