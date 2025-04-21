
export interface DateType {
    startDate: Date | null;
    endDate: Date | null;
    onChangeStart: (date: Date | null) => void;
    onChangeEnd: (date: Date | null) => void;
  }
  