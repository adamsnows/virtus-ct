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
import { Clock, Calendar, Sun, Moon } from 'lucide-react';

const scheduleData = [
  { day: 'Segunda-feira', hours: '05:00 - 10:00 | 16:00 - 21:30', active: true },
  { day: 'Terça-feira', hours: '05:00 - 10:00 | 16:00 - 21:30', active: true },
  { day: 'Quarta-feira', hours: '05:00 - 10:00 | 16:00 - 21:30', active: true },
  { day: 'Quinta-feira', hours: '05:00 - 10:00 | 16:00 - 21:30', active: true },
  { day: 'Sexta-feira', hours: '05:00 - 10:00 | 16:00 - 20:30', active: true },
  { day: 'Sábado', hours: '07:00 - 10:30', active: true },
  { day: 'Domingo', hours: 'Fechado', active: false },
];

export function ScheduleSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              Nossos Horários
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-balance leading-tight">
            Horários de{' '}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-400">
              Funcionamento
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Treinos disponíveis de manhã e à noite para se adequar à sua rotina
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 overflow-hidden">
            {/* Card Header with gradient */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-3xl">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Calendar className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-extrabold">Agenda Semanal</span>
                </CardTitle>
              </CardHeader>
            </div>

            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-primary/20 bg-muted/30 hover:bg-muted/30">
                      <TableHead className="text-left font-bold text-base py-4 pl-6">
                        Dia da Semana
                      </TableHead>
                      <TableHead className="text-center font-bold text-base py-4">
                        Horários
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleData.map((item, index) => (
                      <TableRow
                        key={index}
                        className={`group hover:bg-primary/5 transition-all duration-300 ${
                          !item.active ? 'opacity-60' : ''
                        } ${index % 2 === 0 ? 'bg-muted/10' : ''}`}
                      >
                        <TableCell className="font-semibold text-base py-5 pl-6">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                item.active
                                  ? 'bg-primary shadow-[0_0_8px_rgba(0,217,255,0.6)]'
                                  : 'bg-muted-foreground/30'
                              }`}
                            />
                            {item.day}
                          </div>
                        </TableCell>
                        <TableCell
                          className={`text-center font-medium text-base py-5 ${
                            item.active
                              ? 'text-foreground'
                              : 'text-muted-foreground'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            {item.active && item.hours.includes('|') && (
                              <>
                                <Sun className="h-4 w-4 text-yellow-500 opacity-70" />
                                <span>{item.hours.split('|')[0].trim()}</span>
                                <span className="text-muted-foreground">|</span>
                                <Moon className="h-4 w-4 text-blue-400 opacity-70" />
                                <span>{item.hours.split('|')[1].trim()}</span>
                              </>
                            )}
                            {item.active && !item.hours.includes('|') && (
                              <>
                                <Sun className="h-4 w-4 text-yellow-500 opacity-70" />
                                <span>{item.hours}</span>
                              </>
                            )}
                            {!item.active && <span>{item.hours}</span>}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Info Footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <Clock className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-foreground">
                Aulas a cada <span className="text-primary font-bold">1 hora</span> durante o funcionamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
