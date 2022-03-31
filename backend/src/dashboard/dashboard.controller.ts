import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardDto } from './dto/dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardServices: DashboardService) {}
  @Get()
  async findAll(): Promise<DashboardDto> {
    return await this.dashboardServices.findAll();
  }
}
