using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ChessLib
{
    /// <summary>
    /// An item that belongs to another item.
    /// </summary>
    /// <typeparam name="T">The type of the owner.</typeparam>
    public abstract class BelongsTo<T>
    {
        /// <summary>
        /// The owner of the item.
        /// </summary>
        protected T Owner { get; set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="owner">The owner.</param>
        public BelongsTo(T owner)
        {
            this.Owner = owner;
        }
    }

    /// <summary>
    /// An item that belongs to another item.
    /// </summary>
    /// <typeparam name="T1">The type of an owner.</typeparam>
    /// <typeparam name="T2">The type of an owner.</typeparam>
    public abstract class BelongsTo<T1, T2>
    {
        /// <summary>
        /// One of the owners of the item.
        /// </summary>
        protected T1 OwnerOne { get; set; }
        /// <summary>
        /// One of the owners of the item.
        /// </summary>
        protected T2 OwnerTwo { get; set; }

        /// <summary>
        /// The constructor.
        /// </summary>
        /// <param name="ownerOne">An owner.</param>
        /// <param name="ownerTwo">An owner.</param>
        public BelongsTo(T1 ownerOne, T2 ownerTwo)
        {
            this.OwnerOne = ownerOne;
            this.OwnerTwo = ownerTwo;
        }
    }
}
