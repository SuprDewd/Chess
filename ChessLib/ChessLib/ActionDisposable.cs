using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    internal class ActionDisposable : IDisposable
    {
        public Action DisposeAction { get; private set; }

        public ActionDisposable(Action disposeAction)
        {
            this.DisposeAction = disposeAction;
        }

        public void Dispose()
        {
            this.DisposeAction();
        }
    }
}
