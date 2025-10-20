'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Clock } from 'lucide-react';

export function ScheduleSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Horários de <span className="text-primary">Funcionamento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Treinos disponíveis de manhã e à noite para se adequar à sua rotina
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Clock className="h-6 w-6 text-primary" />
                Agenda Semanal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-left">Dia da Semana</TableHead>
                    <TableHead className="text-center">Horários</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Segunda-feira</TableCell>
                    <TableCell className="text-center">
                      05:00 - 10:00 | 16:00 - 21:30
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Terça-feira</TableCell>
                    <TableCell className="text-center">
                      05:00 - 10:00 | 16:00 - 21:30
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quarta-feira</TableCell>
                    <TableCell className="text-center">
                      05:00 - 10:00 | 16:00 - 21:30
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Quinta-feira</TableCell>
                    <TableCell className="text-center">
                      05:00 - 10:00 | 16:00 - 21:30
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sexta-feira</TableCell>
                    <TableCell className="text-center">
                      05:00 - 10:00 | 16:00 - 20:30
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sábado</TableCell>
                    <TableCell className="text-center">07:00 - 10:30</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Domingo</TableCell>
                    <TableCell className="text-center text-muted-foreground">
                      Fechado
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
